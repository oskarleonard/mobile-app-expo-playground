# NOTES
- Components in this folder are our building blocks for business specific components (which resides in /modules).
- They contain style logic and theme behaviour
- They should be very generic since they are used by multiple parents.
  - className prop is ALWAYS passed in which parent component will use for placement, ie margin-top: 12.
  - callback props are passed in for components which needs to communicate back to parent.

## Guildlines
- /atoms: Components here consists of 1 building block although it can have multiple layers or containers. 
- /molecules: A group of atoms interacting with each other. An example could be a LoginForm
