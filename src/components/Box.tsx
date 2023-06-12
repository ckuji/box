import React, {forwardRef, LegacyRef} from "react"

interface IBoxProps {
    [key:string]: string | React.ReactNode 
}

const Box: React.FC<IBoxProps> = forwardRef(({children, ...propsWithoutChildren}, refBox: LegacyRef<HTMLDivElement>) => {

    return (
        <div ref={refBox} style={propsWithoutChildren}>
            {children}
        </div>
    )
})

export default Box;