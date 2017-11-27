load(
    "//tools/bzl:plugin.bzl",
    "gerrit_plugin",
    "PLUGIN_DEPS",
)

gerrit_plugin(
    name = "changemessage",
    srcs = glob(["src/main/java/**/*.java"]),
    manifest_entries = [
        "Gerrit-PluginName: changemessage",
        "Gerrit-Module: com.googlesource.gerrit.plugins.changemessage.Module",
        "Gerrit-HttpModule: com.googlesource.gerrit.plugins.changemessage.HttpModule",
    ],
    resources = glob(["src/main/resources/**/*"]),
)

java_library(
    name = "changemessage__plugin_classpath_deps",
    testonly = 1,
    visibility = ["//visibility:public"],
    exports = PLUGIN_DEPS + [
        ":changemessage__plugin",
    ],
)
