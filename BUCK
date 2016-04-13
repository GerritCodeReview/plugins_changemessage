include_defs('//bucklets/gerrit_plugin.bucklet')

gerrit_plugin(
  name = 'changemessage',
  srcs = glob(['src/main/java/**/*.java']),
  resources = glob(['src/main/**/*']),
  manifest_entries = [
    'Gerrit-PluginName: changemessage',
    'Gerrit-ApiType: plugin',
    'Gerrit-ApiVersion: 2.12-SNAPSHOT',
    'Gerrit-Module: com.googlesource.gerrit.plugins.changemessage.Module',
    'Gerrit-HttpModule: com.googlesource.gerrit.plugins.changemessage.HttpModule',
  ],
)

# this is required for bucklets/tools/eclipse/project.py to work
java_library(
  name = 'classpath',
  deps = [':changemessage__plugin'],
)

