# Machine cognition
Aim: to create a duplicable machine intelligence that can autonomously learn and solve specified problems
## Modelling machine on man
- I've browsed through Marvin Minsky (RIP)'s books: 'The Emotion Machine' and 'The Society of Mind'. This makes me think that machine intelligence will not come down to a single system, but will follow more of a global workspace paradigm. 
- I have seen various neural architectures (see )

## Ethics
- *They'll take over!* That is an alignment problem. See below.
### Alignment
- Computer ethicists use alignment to describe a quality that we want in intelligent machines. 
- How do I define alignment? Alignment is unbounded control. 
    - Control means within the action space, you specify a range that is allowed and disallowed. 
    - The downside to control is that you need to know the entire action space. 
    - Alignment is when you don't know the entire action space, but you still know whether a task is good or not.
- How do I (plan to) get around alignment? 
    - For starters, before my system is capable of growing exponentially:
        - Do not give my system non-halting goals: Make it easy for the system to 'give up'.
        - Don't give my system access to advanced resources.
        - Constrain the action space to interact within set bounds, as much as possible.
        - Don't ask it to act. Ask it to come up with plans of attack, before acting.
    - Then, I will attempt to utilise [cooperative inverse reinforcement learning](https://www.youtube.com/watch?v=9nktr1MgS-A).
    - Teaching: The machine will constantly be asked to 'explain itself'. If it can do that and it passes then I can get a good picture of its alignment at any point in time.