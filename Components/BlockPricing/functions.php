<?php

namespace Flynt\Components\BlockPricing;

use Flynt\FieldVariables;

function getACFLayout(): array
{
    return [
        'name' => 'blockPricing',
        'label' => __('Block: Pricing', 'flynt'),
    ];
}
