/* global ga */

function f_ga() {
  const args = arguments
  ga.apply(null, args)
  const environments = ['everything']
  for (let env in environments) {
    args[0] = env + '.' + args[0]
    ga.apply(null, args)
  }
}
