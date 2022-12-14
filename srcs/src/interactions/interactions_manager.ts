import { Client } from "discordx";
import { init as auth_button_init } from "./buttons/auth_button";
import { init as user_info_init } from "./commands/user_info";
import { init as help_init } from "./commands/help";
import { init as info_init } from "./commands/info";
import { init as purge_init } from "./commands/purge";
import { init as rules_init } from "./commands/rules";

export async function init(client: Client) {
    await auth_button_init();
    await user_info_init(client);
    await help_init(client);
    await info_init(client);
    await purge_init(client);
    await rules_init(client);
}