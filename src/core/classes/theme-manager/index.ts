import { do_action } from "src/core/event-manager/hooks";

export class ThemeManager {
    static activate(themeName: string): void {
        do_action("theme_activate", themeName);
        return;
    }

    static deactivate(themeName: string): void {
        do_action("theme_deactivate", themeName);
        return;
    }

    static uninstall(themeName: string): void {
        do_action("theme_uninstall", themeName);
        return;
    }

    static install(themeName: string): void {
        do_action("theme_install", themeName);
        return;
    }

    static remove(themeName: string): void {
        do_action("theme_remove", themeName);
        return;
    }
}
