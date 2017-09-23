---
title: "Accessing Boxes and Ports"
class_name: docs
full_width: true
---

When Codio creates a new project, it will generate a unique subdomain name

```
word1-word2.codio.io
```

where `word1` and `word2` are randomly generated words resulting in a unique domain name.

## Recommended approach to port addressing
It is strongly recommended that you reference a Codio box running on a specific port using 

```
word1-word2-3000.codio.io
```

If your PC is behind a firewall, access to external ports are often restricted. Using the recommended approach, the request will be made over port 80 and so will not be blocked by the firewall. 

This approach allows both HHTP and HTTPS access over the full range of ports, `1024` to `9999`.


## Standard port addressing
You can also reference a Codio box using `word1-word2.codio.io:3000`. This approach will work but has the following drawbacks.

- Port ranges are restricted to `1024` to `9499` for HTTP access
- Port ranges are restricted to `9500` to `9999` for HTTPS access
- If the PC you are working on is behind a firewall and it blocks access over non-standard ports, it will fail if it references a box using `word1-word2.codio.io:3000`
- You may waste your time and potentially your sysadmin's time trying to diagnose why your browser will not talk to the Codio box.

## Original Request Header
Should you need it, the `X_FORWARDED_PROTO` header contains original request schema.


## Preview Menu
Codio offers a fully customizable Preview menu so you can preview both static files (.html) and server side files (.php files, Ruby and Node apps etc.) with a single click.

- [Preview documentation](/docs/ide/features/inline-preview)

This feature lets you set up any number of 'aliases' both for static files and Box cli commands.
