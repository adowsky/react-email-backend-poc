import { FastifyPluginAsync } from "fastify"
import { renderEmail } from "../emails";

const email: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.post('/emails/:templateName', async function (request, reply) {
        const { templateName } = request.params as any;
        reply.header('Content-Type', 'text/html');
        reply.send(Buffer.from(await renderEmail(templateName, request.body)));

    })

}

export default email;
