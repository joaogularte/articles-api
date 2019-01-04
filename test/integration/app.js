
/* Descrição geral do teste */
describe("Routes Articles", () => {
    
    const defaultArticle = {
        id: 1,
        name: 'Default Article'
    }

    describe('Route GET /articles', () => {
        it('should return a list of articles', done => {
            request
                .get('/articles')
                .end((err, res) => {

                    expect(res.body[0].id).to.be.eql(defaultArticle.id);
                    expect(res.body[0].name).to.be.eql(defaultArticle.name);
                    
                    done(err);
                })

        })
    })
});