config = {
 	vfs_prefix: "managed",
 	deploy_prefix: "managed",
 	enable_debugging: 0,
 	file_list: [ "WinFormOnline.dll","System.Runtime.dll","mscorlib.dll","System.Core.dll","System.dll","Mono.Security.dll","System.Xml.dll","System.ComponentModel.Composition.dll","System.Windows.Forms.dll","System.Drawing.dll","System.Security.dll","System.Numerics.dll","System.Configuration.dll","Accessibility.dll","System.Deployment.dll","System.Runtime.Serialization.Formatters.Soap.dll","System.ComponentModel.Primitives.dll","System.ComponentModel.TypeConverter.dll","System.Runtime.Extensions.dll","System.IO.FileSystem.dll","System.Drawing.Primitives.dll","WebAssembly.Bindings.dll","WebAssembly.Net.Http.dll","System.Net.Http.dll" ],
	add_bindings: function() { Module.mono_bindings_init ("[WebAssembly.Bindings]WebAssembly.Runtime"); }
}
