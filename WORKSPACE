workspace(name = "changemessage")

load("//:bazlets.bzl", "load_bazlets")

load_bazlets(
    commit = "6d2b8f41ed34dad925b767399d1e4be378abb029",
    #local_path = "/home/<user>/projects/bazlets",
)

load(
    "@com_googlesource_gerrit_bazlets//:gerrit_api.bzl",
    "gerrit_api",
)

gerrit_api()
