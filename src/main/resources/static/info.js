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

Gerrit.install(function(self) {
    function onOpenChange(c, r) {
      var url = "changes/"
          + c._number
          + "/"
          + self.getPluginName()
          + "~"
          + "info";
      var change_plugins = document
          .getElementById('change_plugins');
      Gerrit.get(url, function(r) {
        if (r != null) {
          var doc = document;
          var frg = doc.createDocumentFragment();
	  var p = doc.createElement('textarea');
	  p.style.border = "3px solid transparent";
	  p.style.borderRadius = "10px";
	  p.style.boxShadow = "0 0 0 3px #fff1a8";
	  p.style.background = "#fff1a8";
	  p.style.minWidth = "100%";
	  p.style.maxWidth = "458px";
	  p.style.height = "35px";
	  p.style.minHeight = "35px";
	  p.style.maxHeight = "125px";
          p.style.paddingTop = "5px";
	  p.style.paddingBottom = "5px";
	  p.style.paddingLeft = "5px";
	  p.style.paddingRight = "5px";
	  p.style.overflow = "auto";
	  p.setAttribute("readonly",true);
          p.appendChild(doc.createTextNode(r));
          frg.appendChild(p);

          // add frg to #change_plugins container
          change_plugins.appendChild(frg);
        }
      });
    }
    Gerrit.on('showchange', onOpenChange);
  });
