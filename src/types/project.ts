export type Project = {
    id: string
    title: string
    image: string
    description: string
    link: string
    stacks: {
        stack: string
        color: string
    }[]
    textStatus: string
    colorTextStatus: string
    colorBgStatus: string
}
