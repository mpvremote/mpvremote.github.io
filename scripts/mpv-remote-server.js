'use strict'

var input_ipc_server = mp.get_property('input-ipc-server')
if (!input_ipc_server) {
  input_ipc_server = '/tmp/mpv-remote-server'
  mp.set_property('input-ipc-server', input_ipc_server)
}

mp.command_native_async({
  name: 'subprocess',
  args: ['npx', '-y', 'mpv-remote-server', '--cwd', mp.utils.getcwd(), '--input-ipc-server', input_ipc_server],
  playback_only: false
})
