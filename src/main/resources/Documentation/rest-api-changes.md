@PLUGIN@ - /changes/ REST API
=============================

This page describes the REST endpoints that are added by the @PLUGIN@
plugin.

Please also take note of the general information on the
[REST API](../../../Documentation/rest-api.html).

<a id="change-endpoints"> @PLUGIN@ Endpoints
--------------------------------------------

### <a id="get-info"> Get Change Info
_GET /changes/\{change-id\}/@PLUGIN@~info/_

Get the change info message for a change.

#### Request

```
  GET /changes/myProject~master~I8473b95934b5732ac55d26311a706c9c2bde9940/@PLUGIN@~info/ HTTP/1.0
```

As response a the change info message is returned.

#### Response

```
  HTTP/1.1 200 OK

  This is my change info message.
```
