/**
 * This is basically a shim for an Enum. This forces all statuses to
 * be represented in the database, and also lets them be human readable
 * in code.
 *
 * @author bshai date 5/29/17.
 */

export default Object.freeze({
  DRAFT: 1,
  PUBLIC: 2,
  DELETED: 3
})
