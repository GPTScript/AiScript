// copied from https://github.com/rchoffardet/hashcode/blob/master/src/hashcode.ts

export default abstract class Hashcode
{
    static value(value: any)
    {
        if(value === null || value === undefined)
        {
            return 0;
        }

        switch(typeof value)
        {
            case "boolean":
                return Hashcode.boolean(value);

            case "number":
                return Hashcode.number(value);

            case "string":
                return Hashcode.string(value);

            case "object":
                return Hashcode.object(value);

            default:
                throw new Error(`${typeof value} is not yet supported.`)
        }
    }

    static boolean(value: boolean)
    {
        return Hashcode.number(value ? 1 : 0)
    }

    static number(value: number)
    {
        const buffer = new ArrayBuffer(8);
        const bufferAsF64 = new Float64Array(buffer);
        const bufferAsI32 = new Int32Array(buffer);

        if (~~value === value) {
            return ~~value;
        }

        bufferAsF64[0] = value;

        return bufferAsI32[0] ^ bufferAsI32[1];
    }

    static string(value: string)
    {
        let hash = 37;

        for (let i = 0; i < value.length; i++)
        {
            let charCode = value.charCodeAt(i);
            hash  = ((hash << 5) - hash) + charCode;
            hash |= 0;
        }

        return hash;
    }

    static date(value: Date)
    {
        const typeName = Hashcode.string(value.constructor.name);
        const content = Hashcode.number(value.valueOf())
        return Hashcode.combine(typeName, content);
    }

    static array(value: [])
    {
        return Hashcode.object(value);
    }

    static object(value: object) : number
    {
        const typeName = Hashcode.string(value.constructor.name);
        const entries = Object.entries(value);

        if(entries.length == 0)
        {
            return Hashcode.combine(typeName, 0)
        }

        return Hashcode.combine(typeName, ...entries.map(([key, value]) =>
        {
            return Hashcode.combine(
                Hashcode.value(key),
                Hashcode.value(value)
            );
        }));
    }

    static combine(...hashcodes: number[])
    {
        return hashcodes.length == 0 ? 0 : hashcodes.reduce((a, b) => ((a << 5) + a) ^ b);
    }

    static toString(code: number): string {
        if(code < 0) {
            code = 0xFFFFFFFF + code + 1;
        }
        const value = "00000000" + code.toString(16).toUpperCase();
        return value.substring(value.length - 8);
    }

    static fromString(value: string): number {
        const code = parseInt(value, 16);
        return ((code & 0x80000000) == 0) ? code : code - 1 - 0xFFFFFFFF;
    }
}
