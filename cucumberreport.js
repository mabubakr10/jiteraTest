const reporter = require('cucumber-html-reporter');
const options = {
  // bootstrap,hierarchy,foundation,simple
  theme: 'hierarchy',
  jsonFile: 'cucumber_report.json',
  output: 'reports/AutomationReport.html',
  reportSuiteAsScenarios: true,
  launchReport: true
};
reporter.generate(options);
