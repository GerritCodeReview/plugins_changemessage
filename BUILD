load("@rules_java//java:defs.bzl", "java_library")
load(
    "//tools/bzl:plugin.bzl",
    "PLUGIN_DEPS",
    "gerrit_plugin",
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
