# A history of my knowledge management systems.
## 1: Todolist
- Todolist was a simple to-do list.
- The atomic unit of todolist was a task.
- For each task entered, it had:
    - a parent [default is last selected]
    - a priority [default is lowest]
    - a title 
    - a description
- Issues with TDL were that:
    - You couldn't assign a date to an item
    - It would get cluttered
## 2: Maido
- Maido was an implementation of todolist in HTML.
- The atomic unit of maido was a task.
- For each task entered, it had:
    - a parent [default is nothing]
    - a set of tags
    - a date
- The UX included a calendar. 
- It could be accessed remotely, but via a rather convoluted url.
## 3: Quartermaster
- ???? I don't even remember this one, really. I just remember it as a transition to polymorph.
## 4: Polymorph mk 1
- Basically the same as Maido. But I added a description panel.
- For each task entered, it had:
    - a parent [default is nothing]
    - a set of tags
    - a date
    - a description
- Issues with Mk1 were:
    - The remote access was still a problem. With thousands of past entries, it would be expensive to try and fit them all onto firebase.
    - I wanted to add more things to it: daily thoughts, etc.
    - There were plenty of 'someday' tasks that just kept building up.
## 5: Multi-tab polymorph
- I added more tabs, and then suddenly this opened up the possibility of a KB. 
- The atoms had changed; now along with tasks I had:
    - Thoughts
        - Thoughts are linked to each other. 
        - Thoughts needed order, and often belonged in many different categories at once; which I couldn't take care of.
        - Thoughts didn't have descriptions.
    - Tasks. Tasks were much the same as before: each task had:
        - a parent [default is nothing]
        - a set of tags
        - a date
        - a description
## 6: Itemcluster-only polymorph
- I prioritised working on thoughts, and ended up spending the majority of my time in itemcluster rather than on my lists.
- Atoms were now primarily thoughts.
- This was unsustainable because:
    - There were too many thoughts
    - I would forget about time-dependent things.
## 7: List-only polymorph
- I went back to just lists, because that helped me get back on top of my time-dependent things.
    - List worked fine, but was bad for rambling, because I felt like rambling was adding elements that I wasn't going to come back to.
## 8: List-and-itemcluster polymorph [Current]
- Itemcluster was updated to enable adding descriptions.
- I added a dating system to itemcluster so that I could add dates to my tasks.
- Thoughts went on the same canvas. 
- Issues with the system are:
    - There are still too many thoughts. I need to pre-prune my thoughts somehow; this will come down to both the KMS and my day-to-day handling of things.
    - 
## 9: Hypertext in polymorph [Proposed]
- I would like data entry to be fairly fluid.
- Things to carry over:
    - Tasks, with
        - a parent
        - a set of tags
        - a date
        - a description
- Things to resolve:
    - Tasks lead to other tasks, so it should be easy to take one task and split it down into further tasks.
        - What should happen to the first task?
    - Non-area distractions: maybe have a floating indicator that checks what you're doing?
- Things to add:
    - A stack
    - PARA model?
        - 'Projects' instead of tasks: projects are large enough to enter flow and you're not micromanaging yourself
    - Review sessions
        - mediated by computer. 
        - but you don't usually like being told what to do, or breaking out of flow?
            - Weekly review? Like store up review sessions?
    - Should we keep itemcluster? or work on list only?
        - List worked fine, ...
        - Instead, use the PARA model? Pull rants into 'areas'. unless they go under projects. 
        - Hence, have projects as atoms and things fall under the projects. This keeps them organised. 
- Hence, todo:
    - metasubframes AKA allow rects to handle focus events; so that we can have a sidebar open up to notes. [do rects become operators then? after all, they can handle createItem events... nah.]
    - PARA model. 
