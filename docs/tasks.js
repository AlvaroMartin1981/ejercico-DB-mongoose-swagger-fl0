module.exports = {
    paths: {
      "/create": {
        post: {
          tags: ["Users"],
          description: "Create User",
          operationId: "createUser",
          parameters: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/task",
                },
              },
            },
          },
          responses: {
            201: {
              description: "User created successfully",
            },
            500: {
              description: "Server error",
            },
          },
        },
      },
      "/": {
        get: {
          summary: "Obtener todas las tareas",
          responses: {
            '200': {
              description: "Listado de tareas obtenido exitosamente",
            },
          },
        },
        put: {
          summary: "Actualizar el título de una tarea",
          parameters: [
            {
              in: "path",
              name: "_id",
              required: true,
              schema: {
                type: "string",
              },
              description: "ID de la tarea a actualizar",
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    title: {
                      type: "string",
                      description: "Nuevo título de la tarea",
                    },
                  },
                  required: ["title"],
                },
              },
            },
          },
          responses: {
            '200': {
              description: "Tarea actualizada exitosamente",
            },
          },
        },
        delete: {
          summary: "Eliminar una tarea",
          parameters: [
            {
              in: "path",
              name: "_id",
              required: true,
              schema: {
                type: "string",
              },
              description: "ID de la tarea a eliminar",
            },
          ],
          responses: {
            '200': {
              description: "Tarea eliminada exitosamente",
            },
          },
        },
      },
    },
  };
  