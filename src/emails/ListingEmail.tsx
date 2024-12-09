import {
    Body,
    Container,
    Head,
    Html,
    Preview,
    Section
} from "@react-email/components";


export interface ListElement {
    title: string;
    content: string;
}

export interface ListingEmailProps {
    elements: ListElement[];
}

export const ListingEmail = (props: ListingEmailProps) => {
    const { elements } = props
    return (
        <Html>
            <Head>
                <Preview>Listing email!  </Preview>

            </Head>
            <Body>
                <Container>
                    <Section>
                        {elements.map((el, idx) => (
                            <div key={idx}>
                                <div>{el.title}</div>
                                <div>{el.content}</div>
                            </div>
                        ))}
                    </Section>
                </Container>
            </Body>
        </Html>
    )
}