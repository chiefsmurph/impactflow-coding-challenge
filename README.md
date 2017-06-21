# John Murphy's
# coding challenge
# for ImpactFlow
-----------

## task: create an event widget that consume an api syntax

```{
  "event": {
    "id": 1,
    "name": "Impactflow's 20th Annual Mario Cart Tournament",
    "date": "Wed Aug 2 2017 12:00:00 GMT-0700 (PDT)",
    "tickets": [
      {
        "id": 1,
        "name": "General Admission",
        "price": 50.00,
        "available": 50
      },
      {
        "id": 2,
        "name": "Early Bird",
        "price": 25.00,
        "available": 5
      },
      {
        "id": 3,
        "name": "Participant",
        "price": 99.99,
        "available": 10
      }
    ]
  }
}
```

- allow users to add tickets to their cart
- they should be able to click buy at which point the app shows the all the tickets they added


## Usage

`npm install`
`npm run server`
`go to http://localhost:8080/dist/example.html`

### Or to use on your own webpage...

`<link rel="stylesheet" href="murphy-event-widget.css">`

`<script src="murphy-event-widget.js"></script>`

call `EventWidget.consume(ticketApiObj)`
