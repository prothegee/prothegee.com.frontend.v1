/**
 * common javascript class implementation
*/
export default class CCommonJs
{
    constructor()
    {
        
    }


    /**
     * @brief get client date and time with zone
     * 
     * @returns string: 2022-12-30 24:59:59 ( Asia/Bangkok )
    */
    public get_client_dateandtime_tz()
    {
        let result = "";


        let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        let currentdate = new Date();
        let cDate = currentdate.getFullYear() + '-' + (currentdate.getMonth() + 1) + '-' + currentdate.getDate();
        let cTime = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();

        result = cDate + ' ' + cTime + ` ( ${timezone} )`;


        return result;
    }


    /**
     * @brief get client date
     * 
     * @returns string: 2022-12-30
    */
    public get_client_date(): string
    {
        let currentdate = new Date();
        return currentdate.getFullYear() + '-' + (currentdate.getMonth() + 1) + '-' + currentdate.getDate();
    }


    /**
     * @brief get client time
     * 
     * @returns string: 24:59:59
    */
    public get_client_time(): string
    {
        let currentdate = new Date();
        return currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    }


    /**
     * @brief get client current year
     * 
     * @returns number: 2020
    */
    public get_client_year(): number
    {
        let currentdate = new Date();
        return currentdate.getFullYear();
    }


    /**
     * @brief get client current month
     * 
     * @returns number: 12
    */
    public get_client_month(): number
    {
        let currentdate = new Date();
        return currentdate.getMonth() + 1;
    }


    /**
     * @brief get client day
     * 
     * @returns number: 30
    */
    public get_client_day(): number
    {
        let currentdate = new Date();
        return currentdate.getDate();
    }


    /**
     * @brief get client hours
     * 
     * @returns number: 24
    */
    public get_client_hours(): number
    {
        let currentdate = new Date();
        return currentdate.getHours();
    }


    /**
     * @brief get client minutes
     * 
     * @returns number: 59
    */
    public get_client_minutes(): number
    {
        let currentdate = new Date();
        return currentdate.getMinutes();
    }


    /**
     * @brief get client seconds
     * 
     * @returns number: 59
    */
    public get_client_seconds(): number
    {
        let currentdate = new Date();
        return currentdate.getSeconds();
    }




    /**
     * @brief get client useragent name
     * 
     * @returns string: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0
    */
    public get_client_useragent(): string
    {
        return navigator.userAgent;
    }
}; // class CCommonJs
