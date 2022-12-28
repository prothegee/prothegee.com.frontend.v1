// @ts-ignorec
const defaultProtocol = HeadPub.is_production;
// @ts-ignorec
const defaultDomain = HeadPub.base_domain;


// @ts-ignore
// default http
const DHttp = (defaultProtocol) ? "https://" : "http://";




/**
 * @brief internal class url page collection
*/
export default class CUrlPages
{
    //#region account
    account_home = `${DHttp}account.${defaultDomain}`;
    //#endregion




    //#region api
    api_home = `${DHttp}api.${defaultDomain}`;
    //#endregion




    //#region app
    app_home = `${DHttp}app.${defaultDomain}`;
    //#endregion




    //#region docs
    docs_home = `${DHttp}docs.${defaultDomain}`;
    //#endregion




    //#region download
    download_home = `${DHttp}download.${defaultDomain}`;
    //#endregion




    //#region gallery
    gallery_home = `${DHttp}gallery.${defaultDomain}`;
    //#endregion




    //#region game
    game_home = `${DHttp}game.${defaultDomain}`;
    //#endregion




    //#region music
    music_home = `${DHttp}music.${defaultDomain}`;
    //#endregion




    //#region payment
    payment_home = `${DHttp}payment.${defaultDomain}`;
    //#endregion




    //#region store
    store_home = `${DHttp}store.${defaultDomain}`;
    //#endregion




    //#region www
    www_home = `${DHttp}www.${defaultDomain}`;
    //#endregion




    constructor()
    {

    }
}; // class CUrlPages