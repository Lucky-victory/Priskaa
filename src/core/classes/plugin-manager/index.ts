import { do_action } from "src/core/event-manager/hooks";

export class PluginManager {
    static activate(pluginName: string): void {
        do_action("plugin_activate", pluginName);
        return;
    }

    static deactivate(pluginName: string): void {
        do_action("plugin_deactivate", pluginName);
        return;
    }

    static uninstall(pluginName: string): void {
        do_action("plugin_uninstall", pluginName);
        return;
    }

    static install(pluginName: string): void {
        do_action("plugin_install", pluginName);
        return;
    }

    static remove(pluginName: string): void {
        do_action("plugin_remove", pluginName);
        return;
    }
}
