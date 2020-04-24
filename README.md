SIMPLE QUOTES API FOR FREECODECAMP RANDOM QUOTE MACHINE

Jumpstarted by _firebase init_

Created following this tutorial: https://medium.com/better-programming/building-an-api-with-firebase-109041721f77

_USAGE_:
This API only has a _get_ method, which returns a JSON with a "quotes" key that has a list value which consists of twelve quotes. Each time the API is called, it sends a randomized response. 

The response looks like:
{
  "quotes": [
              {
                  "quote": "Some text",
                  "character": "Some text",
                  "playedby": "Some text",
                  "ytUrl": "Youtube URL",
                  "timestamp": "Youtube timestamp where the quote is spoken in m:ss format"
              }, ...]
}

Hosted GET endpoint: https://us-central1-greatmomentsofbrdramaturgyapi.cloudfunctions.net/app/quotes
