<template>
  <div>
    <UCard
      class="rounded-xl"
      :ui="{
        base: {},
        body: {
          base: '',
          background: '',
          padding: 'sm:px-4 sm:py-2',
        },
      }"
    >
      <template #header>
        <div class="flex justify-center">
          <h6 class="text-primary font-semibold text-xl uppercase">Filter</h6>
        </div>
      </template>
      <!-- Card Content -->
      <div class="overflow-y-auto pl-1 pr-4 h-fit-screen">
        <div>
          <h6 class="font-semibold text-primary">Category</h6>
          <UFormGroup>
            <div class="flex gap-2 mt-2">
              <UButton
                variant="outline"
                class="flex justify-center items-center hover:bg-accent hover:text-white rounded-lg"
                :class="
                  filter.category === 'translator' ? 'bg-accent text-white' : ''
                "
                @click="toggleCategory('translator')"
              >
                Translator
              </UButton>
              <UButton
                variant="outline"
                class="flex justify-center items-center hover:bg-accent hover:text-white rounded-lg"
                :class="
                  filter.category === 'interpreter'
                    ? 'bg-accent text-white'
                    : ''
                "
                @click="toggleCategory('interpreter')"
              >
                Interpreter
              </UButton>
            </div>
          </UFormGroup>
        </div>
        <hr class="my-3" />

        <div>
          <h6 class="font-semibold text-primary">Languages</h6>
          <UFormGroup label="From" class="py-2">
            <UInputMenu
              placeholder="Find Your Language"
              :options="fromLanguageList"
              v-model="filter.from"
              by="id"
              option-attribute="name"
              :search-attributes="['name']"
            />
          </UFormGroup>
          <UFormGroup label="To" class="py-2">
            <UInputMenu
              placeholder="Find Your Language"
              :options="toLanguageList"
              v-model="filter.to"
              by="id"
              option-attribute="name"
              :search-attributes="['name']"
            />
          </UFormGroup>
        </div>

        <hr class="my-3" />

        <div>
          <h6 class="font-semibold text-primary capitalize mb-1">
            {{ filter.category }} Options
          </h6>
          <UFormGroup>
            <label
              v-for="skill in mainSkillList"
              :key="skill.id"
              class="flex gap-1 py-[0.1em]"
            >
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-primary rounded-md"
                :value="skill.id"
                v-model="selectedSkills"
              />
              <span class="ml-2 text-gray-700">{{ skill.name }}</span>
            </label>
          </UFormGroup>
        </div>

        <div class="mt-2">
          <h6 class="font-semibold text-primary capitalize my-1">
            Additional Skills
          </h6>
          <UFormGroup>
            <label
              v-for="skill in additionalSkillList"
              :key="skill.id"
              class="flex gap-1 py-[0.1em]"
            >
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-primary rounded-md"
                :value="skill.id"
                v-model="selectedSkills"
              />
              <span class="ml-2 text-gray-700">{{ skill.name }}</span>
            </label>
          </UFormGroup>
        </div>

        <hr class="my-3" />
        <div class="mt-2">
          <h6 class="font-semibold text-primary capitalize my-1">
            File Extensions
          </h6>
          <UFormGroup class="mb-2">
            <UInputMenu
              placeholder="Select File Extensions"
              :options="[
                { id: 'pdf', name: 'PDF' },
                { id: 'doc', name: 'DOC' },
                { id: 'docx', name: 'DOCX' },
                { id: 'ppt', name: 'PPT' },
                { id: 'pptx', name: 'PPTX' },
                { id: 'xls', name: 'XLS' },
                { id: 'xlsx', name: 'XLSX' },
              ]"
              v-model="filter.fileExtensions"
              by="id"
              option-attribute="name"
              :search-attributes="['name']"
            />
          </UFormGroup>
        </div>

        <hr class="my-3" />
        <div class="mt-2">
          <h6 class="font-semibold text-primary capitalize my-1">Budgets</h6>
          <UFormGroup class="mb-2">
            <URange
              :min="0"
              :max="filter.priceTo"
              :model-value="filter.priceFrom"
            />
            <div class="flex justify-between">
              <span class="text-accent">{{ filter.priceFrom }}</span>
              <span class="text-accent">{{ filter.priceTo }}</span>
            </div>
          </UFormGroup>
        </div>

        <hr class="my-3" />
        <div class="mt-2">
          <h6 class="font-semibold text-primary capitalize my-1">
            Working Hours
          </h6>
          <div class="flex justify-between">
            <UFormGroup>
              <div class="flex gap-2 mt-2">
                <UButton
                  variant="outline"
                  class="flex justify-center items-center hover:bg-accent hover:text-white rounded-lg"
                  :class="
                    filter.category === 'translator'
                      ? 'bg-accent text-white'
                      : ''
                  "
                  @click="toggleCategory('translator')"
                >
                  Anytime
                </UButton>
                <UButton
                  variant="outline"
                  class="flex justify-center items-center hover:bg-accent hover:text-white rounded-lg"
                  :class="
                    filter.category === 'interpreter'
                      ? 'bg-accent text-white'
                      : ''
                  "
                  @click="toggleCategory('interpreter')"
                >
                  Special Time
                </UButton>
              </div>
            </UFormGroup>
          </div>
        </div>
      </div>

      <template #footer>
        <UButton block class="bg-accent"> Apply Filter </UButton>
      </template>
    </UCard>
  </div>
</template>
