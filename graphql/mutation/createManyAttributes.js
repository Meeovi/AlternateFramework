import gql from 'graphql-tag'
export const createManyAttributes = gql`
mutation (
    data: {
    $allow_html_tags_storefront: Boolean!,
    $attribute_class: String!,
    $attribute_code: String!,
    $attribute_value: String!,
    $column_options: String!,
    $default_label: String!,
    $faceted_navigation: Boolean!,
    $filter_options: String!,
    $id: Int!,
    $isPublic: String!,
    $layered_navigation: Boolean!,
    $meta_description: String!,
    $meta_name: Boolean!,
    $meta_url: String!,
    $position: String!,
    $prod_id: BigInt!!,
    $product_attribute_set: String!,
    $products: String!,
    $promo_rule_conditions: Boolean!,
    $search_results_layered_navigation: Boolean!,
    $use_search: String!,
    $used_product_listing: Boolean!,
    $used_sorting_product_listing: Boolean!,
    $visible_catalog_pages_storefront: Boolean!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyAttributes (
    data: {
    allow_html_tags_storefront: $allow_html_tags_storefront,
    attribute_class: $attribute_class,
    attribute_code: $attribute_code,
    attribute_value: $attribute_value,
    column_options: $column_options,
    default_label: $default_label,
    faceted_navigation: $faceted_navigation,
    filter_options: $filter_options,
    id: $id,
    isPublic: $isPublic,
    layered_navigation: $layered_navigation,
    meta_description: $meta_description,
    meta_name: $meta_name,
    meta_url: $meta_url,
    position: $position,
    prod_id: $prod_id,
    product_attribute_set: $product_attribute_set,
    products: $products,
    promo_rule_conditions: $promo_rule_conditions,
    search_results_layered_navigation: $search_results_layered_navigation,
    use_search: $use_search,
    used_product_listing: $used_product_listing,
    used_sorting_product_listing: $used_sorting_product_listing,
    visible_catalog_pages_storefront: $visible_catalog_pages_storefront,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
