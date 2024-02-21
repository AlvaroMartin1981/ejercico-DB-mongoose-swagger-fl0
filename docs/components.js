module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"task identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:"task's title",
                        example:"La chispa adecuada"
                    }, 
                    completed:{    
                        type:'boolean',
                        description:"marcar si esta hecha",
                        example: false,
                    }
                    }
                },
            TaskInput:{
                title:{
                    type:'string',
                    description:"task's title",
                    example:"La chispa adecuada"
                }, 
                completed:{    
                    type:'boolean',
                    description:"marcar si esta hecha",
                    example: false,
                } 
            },
            _id:{
                type:'objectId',
                description:"task identification number",
                example:"6201064b0028de7866e2b2c4"
            },

            }
        }
    }

