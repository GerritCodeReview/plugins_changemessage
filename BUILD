load("//tools/bzl:plugin.bzl", "gerrit_plugin")

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
