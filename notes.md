# server testing

## components of an api

function name(args) => return something;

- routes/endpoints: url(data) => return response;
- business logic (validation/data conversion/operations).
- data access: talk to the persistent data store.

set the test environment to run on 'node' instead of a browser

## Four Pillars (opinions de luis)
- Quality <= non-negotiable
- budget($$$$) - external constraints
- time -> external constraints
- scope -> this one has to give