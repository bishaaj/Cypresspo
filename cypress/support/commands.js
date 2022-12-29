

// Print cypress-axe accessibility violations to the terminal
const severityIndicator = {
    minor:    "⚪",
    moderate: "🟡",
    serious:  "🟠",
    critical: "🔴"
};

    function printAccessibilityViolations(violations) {
        violations.forEach((violation) => {
            const nodes =Cypress.$(
                violation.nodes.map((node) => node.target).join(",")
            );

            Cypress.log({
                name: `${severityIndicator[violation.impact]} A11Y`,
                consoleProps: () => violation,
                $el: nodes,
                message: `[${violation.help}](${violation.helpUrl})`,
            });

            violation.nodes.forEach(({ target }) => {
                Cypress.log({
                    name: '🛠', 
                    consoleProps: () => violation,
                    $el: Cypress.$(target.join(',')),
                    message: target
                })
            })
        })
    }

//                  Run console report
function pprintAccessibilityViolations(violations) {
    cy.task('table',
      violations.map(({ id, impact, description, nodes }) => ({
        impact,
        description: `${description} (${id})`,
        nodes: nodes.length,
      })),
    );
    cy.task(
        'log',
        `${violations.length} accessibility violation${
          violations.length === 1 ? '' : 's'
        } ${violations.length === 1 ? 'was' : 'were'} detected`
      )
      // pluck specific keys to keep the table readable
      const violationData = violations.map(
        ({ id, impact, description, nodes }) => ({
          id,
          impact,
          description,
          nodes: nodes.length
        })
      )
    
      cy.task('table', violationData)
  }

  Cypress.Commands.add('checkAccessibility',
    {
      prevSubject: 'optional',
    },
    (subject, { skipFailures = true } = {}) => {
    cy.injectAxe()
      cy.checkA11y(subject, null, printAccessibilityViolations, skipFailures);
    },
  );
