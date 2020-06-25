# Making a spiderbot
## Research
- I looked at this video: https://www.youtube.com/watch?v=To2Y6Mhu-CE
## Modelling
- We model each leg as two vectors: one elbow and one forearm. There is also a shoulder joint.
    - Let:
        - the shoulder joints be \theta_s (= 0 when upper arm is perpendicular to the body, +ve is clockwise)
        - and \theta_a (= 0 when the upper arm is straight out from body and +ve when arm is raised), 
        - and the forearm joint be \theta_f (= 0 when forearm and upper arm are straight; and +ve when the upper arm is bent INWARDS). 
    - Let:
        - the upper arm length be u and 
        - the forearm length be f. 
    - Then, if the arm is anchored at the origin:
        - the robot's elbow will be at  (u cos \theta_a cos \theta_s,u cos \theta_a sin \theta_s,u sin \theta_a),
        - and the wrist will be at ((u cos \theta_a + f cos (\theta_a - \theta_f)) cos \theta_s,(u cos \theta_a + f cos (\theta_a - \theta_f)) sin \theta_s,u sin \theta_a + f sin (\theta_a - \theta_f)). 
    - Given a desired x, y and z relative to the origin, we have:
        - \theta_s = arctan (x/y), 
        - \theta_a = Math.acos((z ** 2 + x ** 2 + y ** 2 + upperleg ** 2 - lowerleg ** 2) / (2 * upperleg * Math.sqrt(z ** 2 + x ** 2 + y ** 2))) + Math.atan2(z, Math.sqrt(x ** 2 + y ** 2));
        - \theta_f = -(Math.PI - Math.acos((lowerleg ** 2 + upperleg ** 2 - (z ** 2 + x ** 2 + y ** 2)) / (2 * lowerleg * upperleg)) - aa);
    - This takes a nontrivial amount of paper working, but it's not actually that bad. (Note, I implemented this in javascript).
    - Given a specified dx/dt, dy/dt and dz/dt, we have: [TODO]
- Next, we assume that the floor is flat. The condition for stability is that the COM of the robot stays within the triangle formed by the endpoints of the legs (see [here](http://www2.cs.siu.edu/~hexmoor/classes/CS404-S09/RobotLocomotion.pdf)).
- For a 4 legged robot, this means that only one leg can be moving at a time. The algorithm is roughly this:
    1. Move leg 1, then 2, then 3, then 4.
    2. Move the leg that is to be moved in the direction that the robot should move only. 
    3. Every time you move a leg, also move the COM (which we assume to be the geometrical COM if our legs are sufficiently light) to within the intersection of the old COM and the new COM. This can be done by finding the intersection of the diagonals of the old and new tripods, and then adjusting by a factor of 0.1x each of the vectors.
    - A 6 legged robot will be covered if the 4 legged one works.
- At any point in time we are given the location of the COM and the orientation of the body. From this we can derive the locations of each elbow relative to the COM. 
    - We start with the initial orientation of the legs. Let us be offset from the ground by some constant height h; and let the COM be offset from each of the 4 legs by (+-s,+-s).
    - We are also given a motion vector. The motion vector is a unit vector which gives the direction that the robot should try and move towards. 
    - The robot will find the most it can move its leg in the specified direction whilst ensuring the COM can be moved within the new tripod formed. 
        - Let the legs currently have positions (xl1, yl1), (xl2, yl2), (xl3, yl3), (xl4, yl4). Let the direction vector be (dx, dy). Let the centre of mass be (cx, cy). Let us be trying to move leg 4.
        - Then, the current tripod is ta triangle formed by legs 1,2 and 3. 
        - Let the future position of leg 4 be (xl4 + k dx, yl4 + k dy) == (xl4*, yl4*). 
        - Let the 'safety margin' be m (which is less than 1). Then: find the intersection point (ix, iy) [TODO], and move it away from the future position of the currently moving leg by m units in the direction of (ix-xl4*, iy-yl4*) and m units away from the next leg to be moved (ix - xl1, iy - yl1). The final position of the COM should be (ix+ m'(ix - xl4*)+m'(ix - xl1),iy + m'(iy - yl4*)+m'(iy - yl1)) == (cx*, cy*). 
        - There should be solutions to \theta_s, \theta_a, \theta_f for each of the four legs in the position (cx*-xln, cy*-yln, h). 
        - We can binary search values of k such that this condition is satisfied.
    - Once the k value and cx* and cy* values are found, then we
        1. raise leg 4
        2. move cx, cy linearly to cx*, cy*, by a small dy, dx at each step. We do this by moving each of the three tripod legs by dy and dx, since we assume that the robot does not rotate.
        3. (can be done at the same time as 2) move xl4 and yl4 so that it assumes its future position xl4*, yl4*.
        4. lower leg 4.
    - Then this process repeats. 
## Computer modelling
- 