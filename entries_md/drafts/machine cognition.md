# Machine cognition
Aim: to create a duplicable machine intelligence that can autonomously learn and solve specified problems
- knowledge indexing?
- 'common sense'?

## Key parts of machine cognition
- A machine cognition system needs semantic parsing. Semantic parsing is the conversion of natural language sentences to some sort of machine representation.
    - This is important because most of our knowledge is stored in natural language rather than machine representation.
    - A good semantic parsing system will be able to use context to fill in pronouns. 
- A machine cognition system needs a situable machine representation of data.
    - The machine representation needs to:
        - Be extensible. You should be able to add data to the system.
        - Be solvable. There is apparently a compromise between solvability and complexity of a system. See [1](&Expires=1592010060&Signature=LtTA-Bl0w8DlQW6tx-SUnNKTuYalIPZ0Q6WF6g1UnJ9zK2CN~dDkxLUQcQFycr2wIbzBhCXKY67iu75r9VSW27Z9POGJmDEa2U67g2PQZG7hRzvJe0viRZsXRQTBX4JkkXJA8OL9krV33FoOOhS7YwwicdvCYtsQPGI0GtucA-SalSZSdFmYboqZoaHTqkN5kFTKIqGMOxKYIgv-S8g2ultZWvmOV-RRxJ7EnLekmJJNNrcRpKXauo-5CbkQ1o9TULgEKQRTjRir4yGhYfi08yzcTsJ7Wt5KMJFxyxb7v4HRIOk0hpeRcwwkJm5GobVGG-m0g-XNU3riU9aJaTSoHQ__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA)
        - Be probabilistic. This allows your system to work in times when not all the facts are known. See [1]
        - Be relative. Unless you're truly on the far end of any scale, any comparison made is relative. See [1]
        - [My personal thoughts] Understand instantiation. There should be a difference between the definition of a cat and an instance of a cat.
        - [My personal thoughts] Allow tool usage. The representation should be flexible enough for a machine intelligence to utilise tools (which can be represented as functions.)
    - Options:
        - First-order logic representation, and lambda calculus. 
            - First order logic is a representation of information and queries.
                - In first order logic, there are  
                - In first order logic, there are two classes of legal expressions: Formulae and Terms.
                    - A term represents an object/concept in the world. 
                        - Placeholder terms can exist.
                    - A formula represents a statement that is either always true or always false.
                - Each element of information is encoded as `(SOME FORMULA) is true`, with the `is true` left out. 
                - Formulae include relational functions which operate on variables; e.g. `isBlue(bird1)`. The output of a formula is always either true or false.
                - There are also standard definitions of some operators, including:
                    - `^` for 'logical and' 
                    - `v` for 'logical or'
                    - `\backwardsE x` for 'There exists x'
                    - `\upsidedownA` for 'for all'.
                    - `.` for 'such that'
                    - `\negate` for 'logical not'
                    - `=` for 'implies (bidirectional)'
                    - Brackets.
                    - 
                - This is limited however as only true-false queries can be made. For example: Is the weather fine today? can be represented as `\backwardsE x . equals(dayOf(x) equals(weather,fine)`
            - Lambda calculus allows non true-false query statements to be made by adding a `\lambda` operator to first-order logic statements. 
                - `\lambda` is best translated to 'list all objects that meet a condition'. For example: `\lambda x . (locatedIn(x,Japan) ^ isCity(x))` returns all cities in Japan.
            - Probabilistic first order representation: Instead of first order logic being concrete, we should assign probabilities to first order logic. 
                - Probabilities will depend on past experience. How is that to be represented? 
                    - We can directly list contradictory past experiences (which does not break logic as it is kept in a separate pool of 'experience').
                    - We may also update the probability based on experience. However, how do we ensure that the probability is valid? Do we weight all experiences equally? What if a cause is discovered later? 
                        - Perhaps we could lazily calculate the probability of an event in our computational spare time?
        - Graph representation
            - This probably looks pretty but is limited to binary operations.
        - AIML
            - This is a set of prescripted responses to conversation. While this is quick to compute, it will likely seem shallow.
            - Assuming this is probabilistic, 
            - this reduces the machine to a finite state machine. That misses a lot of potential. 
        - As parameter weights in a neural network
            - Maybe much larger than necessary, meaning it'll have trouble running on smaller machines.
            - Not sure if it can be made to be context-aware and manipulate concepts.
- A machine cognition system would be improved if it had context awareness and attention.
    - Attention refers to the ability to let go of useless information. 
    - Context awareness allows the system to remain locally logically consistent and provide more detailed responses.
    - Context awareness may also allow the machine to pick up inconsistencies in the local context and raise them. For example, if I tell a machine 'I am going for a walk' and then ask, 'Hand me a towel', the machine may ask me why I would be needing a towel. (Obviously, because a towel is [supremely useful](https://www.goodreads.com/quotes/24779-a-towel-the-hitchhiker-s-guide-to-the-galaxy-says-is).)
        - This implies that the system can understand situations, and the people within them. What does it mean to understand a situation? 
            - Perhaps, the system will constantly solve for 'for all elements of the system, the elements provide utility'.
                - Hmm. and if it uses this as a basis then the moment humans become useless it'll wipe them out. Definitely something to watch out for.
            - If it finds an object it cannot solve for, it will ask questions. 
                - what about indirect answers, like 'Why do you want a towel?' answered with 'Because I want to remain dry'? Then the machine must interpolate that the towel will help you keep dry. 
                    - How is 'because i want to remain dry' to be represented in the logical formalisation?
                        - desiredState(user, dry); currentState (user, dry) ?
                    - How do we use context to derive 'towel causes remain dry'? 
                        - We note that the current object is towel and we have just been told that we want to stay dry. so: enables(towel, x = user ^ futureState(user,dry))
    - Can context awareness be modelled as temporal awareness? 
        - For example, if I tell a machine 'I am going for a walk' and then thirty minutes later when I return I tell it 'I am going to take a shower', it will not reject my taking a shower because I must be taking a walk. 
- A machine cognition system would be improved if it had something akin to empathy.
    - Empathy is the ability to understand emotion, which are defined as distinct 'modes of operation' of a singular agent, as per Marvin Minsky's [The Emotion Machine](https://en.wikipedia.org/wiki/The_Emotion_Machine).
    - How could a machine develop empathy? 
        - Should / could empathy be hard coded?
            - As a bandaid solution, run sentiment analysis on each input sentence and bin it into a general 'good' or 'bad' emotional state, then try and promote 'good' emotional states? 
        - If a machine can detect emotion by considering an external agent's behaviour; and then determining whether or not it is acting in the same 'mode of operation' (same set of premises), and then do this in bulk to generalise its findings, it would be a statistically sound way of recognising emotion. 
- A machine cognition system requires a sound training methodology.
    - Current training models ask a machine to predict the next word in a provided sequence of words, whether it be a conversation or otherwise.
        - This severely limits systems as it provides no pathway to learning the modelling of other agents, a key element of consciousness.
    - Instead, I will propose that we allow the agent to observe others' conversations as multi-agent interactions that may not include itself. 
        - Perhaps this could be generalised to a metacognition that is aware of its own agency?
        - What is the aim of the machine throughout this observational process?
            - The machine aims to predict what each agent will say, that will cause either a positive or negative response from the other agent; if it is training its EQ capability.
                - We may consider any response to be a positive response, which should address the greeting case. You greet someone because you want them to continue the conversation.  
            - The machine aims to predict how an agent will answer a given question; if it is training its ability to model other agents' minds.
    - How might a machine also understand structured data? As humans we greatly value structure e.g. tables, lists, conversation metadata, which allows us to train ourselves.
        - Perhaps we could assign metadata to every single datapoint used to train? 
- A machine cognition system requires a suitable validation methodology.
    - Current data entry is giving a system a direct prompt to respond to.
    - It would be cool to use a critic system (like a critic network) to validate the system, just like [this video](https://www.youtube.com/watch?v=pc-H4vyg2L4).
    - The aim of the machine cognition system is to be a teacher and a student.
- A machine cognition system would be vastly improved by the ability to adopt submodules useful to its primary objective. 
    - This is scary self-modification, but perhaps we include a pathway here.
## My very own value add
- To the current field of machine cognition, I want to add:
    - Generalised objectives. Instead of looking up a db or spewing sentence continuations, it can do stuff with implicit common sense.
        - Or just a lookaround. It will go deeper and try and fill gaps in its kb to a reasonable level of abstraction. 
        - Where does the abstraction stop? It stops when it detects you, the user, are comfortable with the concept.
        - It might be a few steps ahead, but that's ok.
    - Context awareness. It needs to be able to add context to its responses.
        - I want it to be aware of what i'm doing and help contribute to it.
    - Ability to abstract things and create recipes (algorithms) to a reasonable level of abstraction that can be followed.
## Modelling machine on man
- I've browsed through Marvin Minsky (RIP)'s books: 'The Emotion Machine' and 'The Society of Mind'. This makes me think that machine intelligence will not come down to a single system, but will follow more of a global workspace paradigm. 
- I have seen various neural architectures (see my neural network zoo, WIP).
    - Hence: I am aware of previous works on Semantic Parsing (the conversion of natural language into structured commands e.g. queries of a database).
## Big issues
1. Semantic parsing doesn't (may not? it might) give the system the ability to enrol new information.
2. Semantic parsing requires large datasets that I don't have access to.
    - It should be possible to do few-shot semantic parsing. After all, humans can do it. 
3. Semantic parsing (might not) use context.
4. Semantic parsing doesn't really convey emotion, if you want to use it as part of a chatbot.
5. Semantic parsing is solution based, but I want something that can teach and communicate strategy just as well as it can 'just do' a task.
    - Solution: use a first order logic solver, like a [logic learning machine](https://en.wikipedia.org/wiki/Logic_learning_machine).
6. Semantic parsing probably sucks at small talk.
## Possible solutions
1. Experiment with SOTA semantic parsing and see if we can get it to parse different commands.
2. Create some sort of pattern-matching / best guess / attention based model? examine other few-shot-learning techniques.
3. Create some sort of LSTM except it's based on a knowledge graph
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