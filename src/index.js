/*
 * Simulation:
 * - findBounds(buf positions) -> tex bounds                        O(n)
 * - buildGrid(buf positions, buf masses, tex bounds) -> tex grid   O(n)
 * - buildPyramid(tex grid) -> tex levels[]                         O(m)
 * - simulate(buf positions, buf velocities, tex edges, tex grid)   O(n log(m))
 *      -> (buf positions, buf velocities, tex positions)
 * =====
 * Rendering:
 * - renderEdges(tex edges, tex positions)
 * - renderArrows(tex edges, tex positions)
 * - renderNodes(tex positions)
 * - renderLabel(???)
 */
