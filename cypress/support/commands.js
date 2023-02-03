const severityIndicators ={
minor:    '🟢',
medium:   '🟡',
serious:  '🟠', 
critical: '🔴',
}

function callback(violations){
    violations.foreach(violation =>{
        const nodes = Cypress.$(violation.nodes.map(node => node.target).join(','))

        Cypress.log ({
            name: `${severityIndicators[violation.impact]} Ally`,
            consoleProps: () => violation,
            $el: nodes,
            message: `[${violation.help}](${violation.helpUrl})`
        })

        violation.nodes.foreach(({target})=>{
            Cypress.log({
                name:'🔧',
                consoleProps: () => violation,
                $el: Cypress.$(target.join(',')),
                message:target
            })
        })
    })
}