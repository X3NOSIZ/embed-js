import extend from "just-extend"
import linkify from "html-linkify"

const name = 'url'

export default function url(opts) {
	const defaultOptions = {
		attributes: {},

		// setting this to true will mess up characters like "
		escape: false
	}

	const { attributes, escape } = extend({}, defaultOptions, opts)
	return {
		async transform(options) {
			return extend({}, options, {
				result: linkify(options.result, { attributes, escape })
			})
		}
	}
}

url.pluginName = name
