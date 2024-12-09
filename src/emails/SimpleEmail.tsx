import {
    Body,
    Container,
    Head,
    Html,
    Section,
    Text,
} from "@react-email/components";


export const SimpleEmail = () => {
    return (
        <Html>
            <Head>

            </Head>
            <Body>
                <Container>
                    <Section>

                        <Text>
                            Very simple email!
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    )
}