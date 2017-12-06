// Copyright (C) 2014 The Android Open Source Project
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.googlesource.gerrit.plugins.changemessage.rest;

import com.google.gerrit.extensions.annotations.PluginName;
import com.google.gerrit.extensions.restapi.RestReadView;
import com.google.gerrit.server.change.ChangeResource;
import com.google.gerrit.server.config.PluginConfig;
import com.google.gerrit.server.config.PluginConfigFactory;
import com.google.gerrit.server.project.NoSuchProjectException;
import com.google.inject.Inject;

public class GetChangeInfo implements RestReadView<ChangeResource> {
  private final String pluginName;
  private final PluginConfigFactory cfgFactory;

  @Inject
  public GetChangeInfo(@PluginName String pluginName, PluginConfigFactory cfgFactory) {
    this.pluginName = pluginName;
    this.cfgFactory = cfgFactory;
  }

  @Override
  public String apply(ChangeResource rsrc) throws NoSuchProjectException {
    PluginConfig cfg =
        cfgFactory.getFromProjectConfigWithInheritance(rsrc.getProject(), pluginName);
    return cfg.getString("changeInfo");
  }
}
