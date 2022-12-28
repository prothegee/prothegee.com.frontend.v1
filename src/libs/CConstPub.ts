
/**
 * default constpub from const HeadPub backend v1 javascript head tag
*/
export default class CConstPub
{
    is_production: any;
    server_time: any;

    language: any;

    YYYY: any;
    timestamp: any;

    message_status: any;
    message_detail: any;

    base_domain: any;
    base_url: any;
    jsessionid: any;
    authtoken: any;


    constructor()
    {
        // @ts-ignore
        this.is_production = HeadPub.is_production;
        // @ts-ignore
        this.server_time = HeadPub.server_time;

        // @ts-ignore
        this.language = HeadPub.language;

        // @ts-ignore
        this.YYYY = HeadPub.YYYY;
        // @ts-ignore
        this.timestamp = HeadPub.timestamp;

        // @ts-ignore
        this.message_status = HeadPub.message_status;
        // @ts-ignore
        this.message_detail = HeadPub.message_detail;

        // @ts-ignore
        this.base_domain = HeadPub.base_domain;
        // @ts-ignore
        this.base_url = HeadPub.base_url;
        // @ts-ignore
        this.jsessionid = HeadPub.jsessionid;
        // @ts-ignore
        this.authtoken = HeadPub.authtoken;
    }
}; // class CConstPub