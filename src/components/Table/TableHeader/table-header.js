export default {
	name: 'TableHeader',
	props: {
		headers: {
			type: Array,
			required: true
		},
		expandable: {
			type: Boolean,
			default: false
		},
		stickyHeader: {
			type: Boolean,
			default: false
		}
	}
};
