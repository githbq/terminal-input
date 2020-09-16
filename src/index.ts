
import * as  chalk from 'chalk'
import * as inquirer from 'inquirer'

export const confirm = async (question, defaultValue, color = 'yellow') => {
    const result = await inquirer.prompt({
        type: 'confirm',
        message: chalk[color](question),
        name: 'input',
        default: defaultValue
    })
    return result.input
}