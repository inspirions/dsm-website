import { Tooltip, TooltipProps } from "@mantine/core"

export const DsmTooltip = (props: Partial<TooltipProps>) => {
    const { label = '', children, ...restProps } = props;
    return <Tooltip
        label={label}
        withArrow
        arrowSize={8}
        disabled={!props?.label}
        {...restProps}
    >
        {children}
    </Tooltip>
}