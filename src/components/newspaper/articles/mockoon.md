# Easy API Testing with Mockoon, Docker and OpenAPI

*Relevant because Mockoon's logo is a raccoon and Docker's logo is a whale :)*

**tl;dr:**

```bash
docker run -d \
  --mount type=bind,source=<open-api-spec.yaml>,target=/data,readonly \
  -p 3000:3000 \
  --name mockoon \
  mockoon/cli:latest -d data -p 3000
```

## Intro

I came across this handy one-liner for mocking APIs using Docker, Mockoon CLI and OpenAPI. Assuming you have Docker installed, this is a simple way to generate mock API interactions without too much hassle.

An example case I was using it for: I was a developer on Project A which, when deployed, would interact with Project B. Project B was pretty much a black box to me but I had the OpenAPI spec being implemented by Project B. Rather than spending half a day trying to configure Project B and its interactions, I found this handy command and was able to mock the interactions pretty thoroughly.

## Setup

The Mockoon API works by responding with the example responses defined in your `openapi.yaml` (another reason to keep up-to-date documentation! 😄). Here's a working example using OpenAPI's sample Pet Store spec.

Spin up the Mockoon Docker container:

```bash
docker run -d \
  --mount type=bind,source=./openapi.yaml,target=/data,readonly \
  -p 3000:3000 \
  --name mockoon \
  mockoon/cli:latest -d data -p 3000
```

## GET

Explore the GET endpoint using curl:

```bash
curl http://localhost:3000/api/v3/pet/1
```

The numerical id provided is irrelevant to Mockoon — it always returns the example response from the spec. This is handy when running integration tests that work with random ids. The response looks like:

```json
{
  "id": 10,
  "name": "doggie",
  "category": {
    "id": 1,
    "name": "Dogs"
  },
  "photoUrls": [""],
  "tags": [
    {
      "id": 75776,
      "name": ""
    }
  ],
  "status": "pending"
}
```

This result is an amalgamation of the individual `example:` fields in the `openapi.yaml` file. It is also possible to specify a complete example at the endpoint definition level, which provides an easier way of editing the return body for your use case.

## PUT

The same works for other HTTP methods. Here's a PUT example:

```bash
curl -X 'PUT' \
  'http://localhost:3000/api/v3/pet' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
    "id": 10,
    "name": "doggie",
    "category": { "id": 1, "name": "Dogs" },
    "photoUrls": ["string"],
    "tags": [{ "id": 0, "name": "string" }],
    "status": "available"
  }'
```

Mockoon does not validate the input, so we could put anything in the JSON body and still receive the example response generated from the `openapi.yaml`:

```json
{
  "id": 10,
  "name": "doggie",
  "category": {
    "id": 1,
    "name": "Dogs"
  },
  "photoUrls": [""],
  "tags": [
    {
      "id": 81582,
      "name": ""
    }
  ],
  "status": "pending"
}
```

## Conclusion

This setup provides an easy way of performing automated or manual integration testing without having to rely on an API that can be difficult to set up or maintain. I use it for quick manual integration testing whenever I need to work against a well-documented but inaccessible service.
