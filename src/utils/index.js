/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable eol-last */
const mapDBToModel = ({
    id,
    title,
    body,
    tags,
    created_at,
    updated_at,
}) => ({
    id,
    title,
    body,
    tags,
    createdAt: created_at,
    updatedAt: updated_at,
});

module.exports = { mapDBToModel };