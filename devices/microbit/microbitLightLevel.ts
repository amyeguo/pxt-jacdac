namespace servers {
    const SRV_LIGHT_LEVEL = 0x17dc9a1c
    //% fixedInstance whenUsed block="light level"
    export const lightLevelServer = jacdac.createSimpleSensorServer(
        SRV_LIGHT_LEVEL,
        "u0.16",
        () => input.lightLevel() / 255.0,
        {
            streamingInterval: 50,
            readingError: () => 0.05,
        }
    )
}
