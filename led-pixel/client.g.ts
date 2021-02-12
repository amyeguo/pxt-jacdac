namespace modules {
    /**
     * A controller for strips of individually controlled RGB LEDs.
     **/
    //% fixedInstances blockGap=8
    export class LedPixelClient extends jacdac.Client {

            private readonly _brightness : jacdac.RegisterClient<[number]>;            

            constructor(role: string) {
            super(jacdac.SRV_LED_PIXEL, role);

            this._brightness = this.addRegister<[number]>(jacdac.LedPixelReg.Brightness, "u0.8");            
        }
    

        /**
        * Set the luminosity of the strip.
        * At `0` the power to the strip is completely shut down.
        */
        //% blockId=jacdac_ledpixel_brightness___get
        //% group="LED Pixel"
        //% block="%ledpixel brightness" callInDebugger
        brightness(): number {            
            const values = this._brightness.pauseUntilValues() as any[];
            return values[0];
        }
        /**
        * Set the luminosity of the strip.
        * At `0` the power to the strip is completely shut down.
        */
        //% blockId=jacdac_ledpixel_brightness___set
        //% group="LED Pixel" value.min=0 value.max=1 value.defl=0.05
        //% block="set %ledpixel brightness to %value"
        setBrightness(value: number) {
            const values = this._brightness.values as any[];
            values[0] = value;
            this._brightness.values = values as [number];
        } 

    }
    //% fixedInstance whenUsed
    export const ledPixel = new LedPixelClient("led Pixel");
}