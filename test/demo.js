describe('QA', function() {
  it('should have a title login', function() {
    return browser.getTitle().should.eventually.be.equal('Trizic Accelerator Login');
  });

  it('should be able to login', function() {
    return browser
      .setValue('#uname', process.env.TZ_UNAME)
      .setValue('#pwd', process.env.TZ_PWD)
      .click('.sbmt-btn')
      .waitForExist('.profile')
      .url(function (err, res) {
        expect(res.value).to.have.string('/accounts');
      });
  });

  it('should be able to go to Manage Transactions', function() {
    return browser.click('=Manage Transactions')
      .waitForExist('.cancel-order-btn')
      .url(function (err, res) {
        expect(res.value).to.have.string('/transactions');
      });
  });

  it('should be able to go to Model Portfolios', function() {
    return browser.click('=Model Portfolios')
      .waitForExist('.portfolio-table')
      .url(function (err, res) {
        expect(res.value).to.have.string('/portfolios');
      });
  });

  it('should be able to go to Business Settings', function() {
    return browser.click('=Business Settings')
      .waitForExist('.info-title-profile')
      .url(function (err, res) {
        expect(res.value).to.have.string('/profiles');
      });
  });
});
