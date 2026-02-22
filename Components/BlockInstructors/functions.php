<?php

namespace Flynt\Components\BlockInstructors;

use Flynt\FieldVariables;

function getACFLayout(): array
{
    return [
        'name' => 'blockInstructors',
        'label' => __('Block: Instructors', 'flynt'),
        'sub_fields' => [
            [
                'label' => __('Instructors', 'flynt'),
                'name' => 'instructors',
                'type' => 'repeater',
                'collapsed' => '',
                'layout' => 'block',
                'button_label' => __('Add Instructor', 'flynt'),
                'sub_fields' => [
                    [
                        'label' => __('Image', 'flynt'),
                        'name' => 'avatar',
                        'type' => 'image',
                        'preview_size' => 'thumbnail',
                        'mime_types' => 'jpg,jpeg,png,webp',
                        'required' => 1,
                    ],
                    [
                        'label' => __('Name', 'flynt'),
                        'name' => 'name',
                        'type' => 'text',
                        'required' => 1,
                    ],
                    [
                        'label' => __('Role', 'flynt'),
                        'name' => 'role',
                        'type' => 'text',
                        'required' => 1,
                    ],
                    [
                        'label' => __('Bio', 'flynt'),
                        'name' => 'bio',
                        'type' => 'text',
                        'required' => 1,
                    ],
                ]
            ]
        ]
    ];
}
