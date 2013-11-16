gruntfile
=========

Proxies
-------------
<p>This was one of the more confusing parts of setting up this template.  if you look in the connect object you will see that
  there are 2 servers running.</p>

  <ol>
    <li>**staticserver** - port **8001**</li>
    <li>**server** - port **9000**</li>
  </ol>

<p>The **server** server has all of the proxies attached to it.  All requests hit the **server** server and are immediately proxied.
    If no route is found for the request in the predefined proxies, then the request is sent to the **staticserver**.  This will then route
    the request as would normally be expected.</p>

Open
--------------
<p>This task has to be registered between the connect task and the watch task</p>
