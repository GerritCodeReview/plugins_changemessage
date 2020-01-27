Build
=====

This plugin is built with Bazel.

Build in Gerrit tree
--------------------

Clone (or link) this plugin to the `plugins` directory of Gerrit's source tree.

Then issue

```
  bazel build plugins/@PLUGIN@
```

in the root of Gerrit's source tree to build

The output is created in

```
  bazel-bin/plugins/@PLUGIN@/@PLUGIN@.jar
```

This project can be imported into the Eclipse IDE.
Add the plugin name to the `CUSTOM_PLUGINS` set in
Gerrit core in `tools/bzl/plugins.bzl`, and execute:

```
  ./tools/eclipse/project.py
```

Build standalone
----------------

To build the plugin, issue the following command:

```
bazel build @PLUGIN@
```

The output is created in

```
bazel-bin/@PLUGIN@.jar
```

This project can be imported into the Eclipse IDE:

```
./tools/eclipse/project.sh
```
